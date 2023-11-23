package controller;

import model.Student;
import model.Teacher;
import service.IStudentService;
import service.ITeacherService;
import service.impl.StudentServiceImpl;
import service.impl.TeacherServiceImpl;

import java.util.List;

public class StudentController {

    private final IStudentService studentService = new StudentServiceImpl();

    public void createStudent(Student student) {
        this.studentService.createStudent(student);
    }

    public void removeStudent(int id) {
        this.studentService.removeStudent(id);
    }

    public List<Student> getStudents() {
        return this.studentService.getStudents();
    }
}
