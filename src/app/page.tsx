interface WorkoutForm {
  fullName?: string;
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
  primaryGoal: string;
  secondaryGoal?: string;
  experienceLevel: string;
  limitations?: string;
  workoutDaysPerWeek: number;
  prefferedWorkoutDuration: number;
  equipmentAvailable: string;
  otherEquipment?: string;
  goalTimeline?: string;
  exercisesToAvoid?: string;
  motivationLevel?: string;
}

export default function Home() {
  return (
    <main>
      <form>
        <div>
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="full-name" name="full-name" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" min="1" max="100" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" defaultValue={"---"}>
            <option value="---" disabled>
              ---
            </option>
            <option value="Male">Male</option>
            <option value="Male">Female</option>
            <option value="Male">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input type="number" id="height" name="height" />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input type="number" id="weight" name="weight" />
        </div>
        <div>
          <label htmlFor="primaryGoal">Primary goal</label>
          <input type="text" id="primaryGoal" name="primaryGoal" />
        </div>
        <div>
          <label htmlFor="secondaryGoal">Secondary goal</label>
          <input type="text" id="secondaryGoal" name="secondaryGoal" />
        </div>
        <div>
          <label htmlFor="experienceLevel">Experience level</label>
          <input type="text" id="experienceLevel" name="experienceLevel" />
        </div>
        <div>
          <label htmlFor="limatations">Limitations</label>
          <input type="text" id="limitations" name="limitations" />
        </div>
        <div>
          <label htmlFor="workoutDaysPerWeek">Workout days per week</label>
          <select
            name="workoutDaysPerWeek"
            id="workoutDaysPerWeek"
            defaultValue="---"
          >
            <option value="---" disabled>
              ---
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div>
          <label htmlFor="prefferedWorkoutDuration">
            Preffered workout duration
          </label>
          <input
            type="number"
            id="prefferedWorkoutDuration"
            name="prefferedWorkoutDuration"
            min="10"
            max="120"
          />
        </div>
        <div>
          <label htmlFor="equipmentAvailable">Do you have access to:</label>
          <select
            name="equipmentAvailable"
            id="equipmentAvailable"
            defaultValue="---"
          >
            <option value="---">---</option>
            <option value="fullGymEquipment">Full gym equipment</option>
            <option value="dumbells">Dumbells</option>
            <option value="resistanceBands">Resistance bands</option>
            <option value="bodyweightOnly">Bodyweight only</option>
          </select>
        </div>
        <div>
          <label htmlFor="otherEquipment">Other equipment</label>
          <input type="text" id="otherEquipment" name="otherEquipment" />
        </div>
        <div>
          <label htmlFor="goalTimeline">Goal timeline</label>
          <input
            type="number"
            name="goalTimeline"
            id="goalTimeline"
            min="1"
            max="24"
          />
        </div>
        <div>
          <label htmlFor="exerciseToAvoid">Exercises to avoid</label>
          <input type="text" id="goalTimeline" name="goalTimeline" />
        </div>
        <div>
          <label htmlFor="motivationLevel">Motivation level</label>
          <input type="text" id="motivationLevel" name="motivationLevel" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

// prefferedWorkoutDuration: number;
// equipmentAvailable: string;
// otherEquipment?: string;
// goalTimeline?: string;
// exercisesToAvoid?: string;
// motivationLevel?: string;
