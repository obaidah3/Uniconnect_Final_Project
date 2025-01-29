namespace UniConnect.Models;

public class ProfessorProfile
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Title { get; set; } = null!;
    public string Faculty { get; set; }= null!;
    public string Office { get; set; }= null!;
    public string Email { get; set; }= null!;
    public string Biography { get; set; }= null!;
    public string ResearchInterest { get; set; }= null!;
    public string ActiveCourses { get; set; }= null!;
    public string Publications { get; set; }= null!;
    public string ResearchGate { get; set; }= null!;
    public bool IsDean { get; set; }
}