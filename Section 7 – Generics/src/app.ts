interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// this function works because we are returning an object of the type CourseGoal
const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  return { title, description, completeUntil };
};

// however if we wanted to iteratively insert the properties of Coursegoal, typescript would throw back an error. To circumvent this, the partial keyword has to be used
const createCourseGoalPartial = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  // typescript wraps coursegoal and turns the properties of CourseGoal into optional properities, telling typescript that coursegoal will be CourseGoal in the future
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  // we have to typecase courseGoal as it is still of type Partial<CourseGoal>
  return courseGoal as CourseGoal;
};

// the readOnly attribute makes sures that typescript throws an error when a variable that is readonly is modified
const namelist: Readonly<string[]> = ['Max', 'Tom'];
namelist.push('Test')
namelist.pop()
