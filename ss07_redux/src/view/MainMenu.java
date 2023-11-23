package view;

import controller.StudentController;
import controller.TeacherController;
import model.Student;
import model.Teacher;

import java.util.List;
import java.util.Scanner;

public class MainMenu {

    private static final String SHOW_LIST = "SHOW_LIST";
    private static final String ADD = "ADD";
    private static final String REMOVE = "REMOVE";
    private final Scanner scanner = new Scanner(System.in);

    private final StudentController studentController = new StudentController();
    private final TeacherController teacherController = new TeacherController();

    public void run() {
        int option = this.intMainMenu();
        int objectOption;
        switch (option) {
            case 1:
                objectOption = this.inputObjectMenu();
                this.handleSelectedMenu(ADD, objectOption);
                break;
            case 2:
                objectOption = this.inputObjectMenu();
                this.handleSelectedMenu(REMOVE, objectOption);
                break;
            case 3:
                objectOption = this.inputObjectMenu();
                this.handleSelectedMenu(SHOW_LIST, objectOption);
                break;
            default:
                // TODO
                break;
        }
    }

    private int intMainMenu() {
        int option = 0;
        do {
            try {
                this.showMainMenu();
                System.out.println("Mời bạn chọn chức năng: ");
                option = Integer.parseInt(scanner.nextLine());
            } catch (Exception ex) {
                System.out.println("Dữ liệu bạn nhập bị sai");
            }
        } while (option <= 0 || option > 4);
        return option;
    }


    private int inputObjectMenu() {
        int objectOption = 0;
        do {
            try {
                this.showObjectMenu();
                System.out.println("Mời bạn chọn đối tượng: ");
                objectOption = Integer.parseInt(scanner.nextLine());
            } catch (Exception ex) {
                System.out.println("Dữ liệu bạn nhập bị sai");
            }
        } while (objectOption <= 0 || objectOption > 2);
        return objectOption;
    }

    private void showMainMenu() {
        System.out.println("==== MENU ====");
        System.out.println("1. Thêm mới giảng viên hoặc học sinh");
        System.out.println("2. Xoá giảng viên hoặc học sinh");
        System.out.println("3. Xem danh sách giảng viên hoặc học sinh");
        System.out.println("4. Thoát");
    }

    private void showObjectMenu() {
        System.out.println("==== OBJECT MENU ====");
        System.out.println("1. Giảng viên");
        System.out.println("2. Học sinh");
    }

    private void handleSelectedMenu(String action, int objectOption) {
        switch (objectOption) {
            case 1:
                if (ADD.equals(action)) {
                    Teacher teacher = this.inputTeacherInformation();
                    this.teacherController.createTeacher(teacher);
                } else if (REMOVE.equals(action)) {
                    System.out.println("Mời nhập mã giảng viên cần xoá: ");
                    int teacherId = Integer.parseInt(this.scanner.nextLine());
                    this.teacherController.removeTeacher(teacherId);
                } else if (SHOW_LIST.equals(action)) {
                    List<Teacher> teachers = this.teacherController.getTeachers();
                    for (Teacher teacher : teachers) {
                        System.out.println(teacher);
                    }
                }
                this.run();
                break;
            case 2:
                if (ADD.equals(action)) {
                    Student student = this.inputStudentInformation();
                    this.studentController.createStudent(student);
                } else if (REMOVE.equals(action)) {
                    System.out.println("Mời nhập mã học sinh cần xoá: ");
                    int studentId = Integer.parseInt(this.scanner.nextLine());
                    this.studentController.removeStudent(studentId);
                } else if (SHOW_LIST.equals(action)) {
                    List<Student> students = this.studentController.getStudents();
                    for (Student student : students) {
                        System.out.println(student);
                    }
                }
                this.run();
                break;
            default:
                // TODO
                break;
        }
    }

    // TODO label input
    private Teacher inputTeacherInformation() {
        Teacher teacher = new Teacher();
        teacher.setName(this.scanner.nextLine());
        teacher.setDateOfBirth(this.scanner.nextLine());
        teacher.setGender(this.scanner.nextLine());
        teacher.setSpecialize(this.scanner.nextLine());
        return teacher;
    }

    // TODO label input
    private Student inputStudentInformation() {
        Student student = new Student();
        student.setName(this.scanner.nextLine());
        student.setDateOfBirth(this.scanner.nextLine());
        student.setGender(this.scanner.nextLine());
        student.setClazzName(this.scanner.nextLine());
        student.setScore(Float.parseFloat(this.scanner.nextLine()));
        return student;
    }
}
