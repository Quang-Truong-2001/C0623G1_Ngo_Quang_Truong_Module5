package service;

import model.Student;
import model.Teacher;

import java.util.List;

public interface IStudentService {

    void createStudent(Student student);

    void removeStudent(int id);

    List<Student> getStudents();
}
