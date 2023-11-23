package model;

public class Student extends Person {

    private String clazzName;

    private float score;

    public Student() {
    }

    public Student(int id, String name, String dateOfBirth, String gender,
                   String clazzName, float score) {
        super(id, name, dateOfBirth, gender);
        this.clazzName = clazzName;
        this.score = score;
    }

    public String getClazzName() {
        return clazzName;
    }

    public void setClazzName(String clazzName) {
        this.clazzName = clazzName;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }


    @Override
    public String toString() {
        return "id = " + this.getId()
                + " name = " + this.getName()
                + " dateOfBirth = " + this.getDateOfBirth()
                + " gender = " + this.getGender()
                + " clazzName = " + this.clazzName
                + " score = " + this.score;
    }
}
