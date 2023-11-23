package service.impl;

import model.Student;
import model.Teacher;
import repository.ITeacherRepository;
import repository.impl.TeacherRepositoryImpl;
import service.IStudentService;
import service.ITeacherService;

import java.util.List;

public class TeacherServiceImpl implements ITeacherService {


    private final ITeacherRepository teacherRepository = new TeacherRepositoryImpl();

    @Override
    public void createTeacher(Teacher teacher) {
        this.teacherRepository.createTeacher(teacher);
    }

    @Override
    public void removeTeacher(int id) {
        this.teacherRepository.removeTeacher(id);
    }

    @Override
    public List<Teacher> getTeachers() {
        return this.teacherRepository.getTeachers();
    }
}
