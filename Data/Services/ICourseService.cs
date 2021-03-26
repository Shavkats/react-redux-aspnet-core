using System.Collections.Generic;

namespace Courses.Data
{
    public interface ICourseService
    {
        List<Course> GetAllCourses();

        Course GetCourseById(int courseId);

        void UpdateCourse(int courseId, Course course);

        void DeleteCourse(int courseId);

        void AddCourse(Course course);
    }
}