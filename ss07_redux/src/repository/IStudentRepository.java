package repository;

import model.Student;

import java.util.List;

public interface IStudentRepository {

    void createStudent(Student student);

    void removeStudent(int id);

    List<Student> getStudents();
}
