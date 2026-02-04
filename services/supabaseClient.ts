
import { Course } from '../types';

const supabaseUrl = "https://ljypfmwcqsloojghcwsf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqeXBmbXdjcXNsb29qZ2hjd3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNzE3MDIsImV4cCI6MjA3Njk0NzcwMn0.hJ8bqNh7Os6HugV7aOjfCu_7eE-IxZo9GGokNukalyY";

/**
 * Fetches course data from the live Supabase instance.
 * Uses the REST API endpoint to query the 'courses' table.
 */
export const fetchCourses = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/courses?select=*`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`Supabase Error: ${response.status} ${response.statusText}`);
      // Fallback to empty array so the component can use its mock data
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Network error connecting to Supabase:', err);
    return [];
  }
};
