package service.impl;

import model.Student;
import repository.IStudentRepository;
import repository.ITeacherRepository;
import repository.impl.StudentRepositoryImpl;
import repository.impl.TeacherRepositoryImpl;
import service.IStudentService;

import java.util.List;

public class StudentServiceImpl implements IStudentService {


    private final IStudentRepository studentRepository = new StudentRepositoryImpl();


    @Override
    public void createStudent(Student student) {
        this.studentRepository.createStudent(student);
    }

    @Override
    public void removeStudent(int id) {
        this.studentRepository.removeStudent(id);
    }

    @Override
    public List<Student> getStudents() {
        return this.studentRepository.getStudents();
    }
}
