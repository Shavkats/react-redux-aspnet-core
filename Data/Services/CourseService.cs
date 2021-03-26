using System.Collections.Generic;
using System.Linq;

namespace Courses.Data
{
    public class CourseService : ICourseService
    {
        public void AddCourse(Course course)
        {
            Data.Courses.Add(course);
        }

        public void DeleteCourse(int courseId)
        {
            var course = Data.Courses.FirstOrDefault(n => n.Id == courseId);
            if (course != null)
            {
                Data.Courses.Remove(course);
            }
        }

        public List<Course> GetAllCourses() => Data.Courses.ToList();

        public Course GetCourseById(int courseId) => Data.Courses.FirstOrDefault(n => n.Id == courseId);

        public void UpdateCourse(int courseId, Course course)
        {
            var oldCourse = Data.Courses.FirstOrDefault(n => n.Id == courseId);
            if (oldCourse != null)
            {
                oldCourse.Id = course.Id;
                oldCourse.Title = course.Title;
                oldCourse.Description = course.Description;
                oldCourse.Credits = course.Credits;
            }
        }
    }
}