﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class checkTestEntities : DbContext
    {
        public checkTestEntities()
            : base("name=checkTestEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Answer> Answers { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<QuestionforTest> QuestionforTests { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<student> students { get; set; }
        public virtual DbSet<StudentForCourse> StudentForCourses { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
        public virtual DbSet<Test> Tests { get; set; }
        public virtual DbSet<TestForStudent> TestForStudents { get; set; }
    }
}
