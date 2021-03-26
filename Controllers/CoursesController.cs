using System;
using Courses.Data;
using Microsoft.AspNetCore.Mvc;

namespace Courses.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private ICourseService _service;
        public CoursesController(ICourseService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetCourses()
        {
            try
            {
                //throw new Exception();
                var allCourses = _service.GetAllCourses();
                return Ok(allCourses);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("SingleCourse/{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = _service.GetCourseById(id);
            return Ok(course);
        }

        [HttpPost("AddCourse")]
        public IActionResult AddCourse([FromBody] Course course)
        {
            if (course != null)
            {
                _service.AddCourse(course);
            }
            return Ok();
        }

        [HttpPut("UpdateCourse/{id}")]
        public IActionResult UpdateCourse(int id, [FromBody] Course course)
        {
            _service.UpdateCourse(id, course);
            return Ok(course);
        }

        [HttpDelete("DeleteCourse/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            _service.DeleteCourse(id);
            return Ok();
        }
    }
}