"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Daily Habit Tracker Component
 * 
 * A polished, interactive habit tracking component.
 * Uses shadcn-style components, localStorage persistence,
 * and provides streak tracking.
 * 
 * Features:
 * - Add new habits
 * - Mark habits complete for today
 * - Track streaks
 * - Delete habits
 * - Persists to localStorage
 */

interface Habit {
  id: string;
  name: string;
  created: string;
  completed: Record<string, boolean>; // date string -> completed
  streak: number;
}

/**
 * Generate unique ID
 */
function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Get today's date string (YYYY-MM-DD)
 */
function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * Calculate streak from completion record
 */
function calculateStreak(completed: Record<string, boolean>): number {
  const today = new Date();
  let streak = 0;
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    
    if (completed[dateStr]) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  
  return streak;
}

/**
 * HabitTracker - Main component
 * 
 * Website Mastery Standards Applied:
 * - shadcn-style components
 * - Responsive design
 * - Dark theme
 * - Smooth animations
 * - TypeScript strict typing
 * - localStorage persistence
 */
export function HabitTracker() {
  // State: Habits list
  const [habits, setHabits] = useState<Habit[]>([]);
  
  // State: New habit input
  const [newHabit, setNewHabit] = useState("");
  
  // State: Loading
  const [isLoading, setIsLoading] = useState(true);
  
  // Effect: Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("habits");
      if (saved) {
        setHabits(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load habits:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  // Effect: Save to localStorage on change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("habits", JSON.stringify(habits));
      } catch (error) {
        console.error("Failed to save habits:", error);
      }
    }
  }, [habits, isLoading]);
  
  // Handler: Add new habit
  const handleAddHabit = useCallback(() => {
    if (!newHabit.trim()) return;
    
    const habit: Habit = {
      id: generateId(),
      name: newHabit.trim(),
      created: getToday(),
      completed: {},
      streak: 0,
    };
    
    setHabits((prev) => [...prev, habit]);
    setNewHabit("");
  }, [newHabit]);
  
  // Handler: Toggle completion for today
  const handleToggleComplete = useCallback((id: string) => {
    const today = getToday();
    
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        
        const isCompleted = !!habit.completed[today];
        const newCompleted = { ...habit.completed };
        
        if (isCompleted) {
          delete newCompleted[today];
        } else {
          newCompleted[today] = true;
        }
        
        return {
          ...habit,
          completed: newCompleted,
          streak: calculateStreak(newCompleted),
        };
      })
    );
  }, []);
  
  // Handler: Delete habit
  const handleDelete = useCallback((id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }, []);
  
  // Handler: Keyboard submit
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleAddHabit();
      }
    },
    [handleAddHabit]
  );
  
  // Helper: Check if completed today
  const isCompletedToday = (habit: Habit): boolean => {
    return !!habit.completed[getToday()];
  };
  
  // Render: Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-slate-400">Loading habits...</div>
      </div>
    );
  }
  
  // Render: Main component
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-950/50 rounded-xl border border-slate-800">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-50">Daily Habits</h2>
        <p className="text-slate-400 text-sm mt-1">
          {habits.length} habit{habits.length !== 1 ? "s" : ""} tracked
        </p>
      </div>
      
      {/* Add Habit Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new habit..."
          className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
        />
        <button
          onClick={handleAddHabit}
          disabled={!newHabit.trim()}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          Add
        </button>
      </div>
      
      {/* Habits List */}
      <div className="space-y-3">
        {habits.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            <p>No habits yet.</p>
            <p className="text-sm mt-1">Add your first habit above!</p>
          </div>
        ) : (
          habits.map((habit) => (
            <div
              key={habit.id}
              className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              {/* Checkbox */}
              <button
                onClick={() => handleToggleComplete(habit.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCompletedToday(habit)
                    ? "bg-emerald-500 border-emerald-500"
                    : "border-slate-600 hover:border-emerald-500"
                }`}
              >
                {isCompletedToday(habit) && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              
              {/* Habit Info */}
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isCompletedToday(habit)
                      ? "text-slate-500 line-through"
                      : "text-slate-100"
                  }`}
                >
                  {habit.name}
                </p>
                <p className="text-xs text-slate-500">
                  {habit.streak > 0 ? (
                    <span className="text-emerald-400">
                      🔥 {habit.streak} day streak
                    </span>
                  ) : (
                    "Start your streak!"
                  )}
                </p>
              </div>
              
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(habit.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-red-400 transition-all"
                aria-label="Delete habit"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
      
      {/* Footer */}
      <p className="text-xs text-slate-600 mt-6 text-center">
        Habits saved to your browser • {getToday()}
      </p>
    </div>
  );
}

/**
 * Test Cases:
 * 1. Add habit → appears in list
 * 2. Mark complete → checkbox checked, streak updates
 * 3. Unmark → streak recalculates
 * 4. Delete → removed from list
 * 5. Refresh page → habits persist
 */
