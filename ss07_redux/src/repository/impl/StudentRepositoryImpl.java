package repository.impl;

import model.Student;
import repository.IStudentRepository;

import java.util.ArrayList;
import java.util.List;

public class StudentRepositoryImpl implements IStudentRepository {

    private final List<Student> students = new ArrayList<>();

    @Override
    public void createStudent(Student student) {
        student.setId(this.students.size() + 1);
        this.students.add(student);
    }

    @Override
    public void removeStudent(int id) {
        for (Student student : this.students) {
            if (student.getId() == id) {
                this.students.remove(student);
                return;
            }
        }
    }

    @Override
    public List<Student> getStudents() {
        return this.students;
    }
}
