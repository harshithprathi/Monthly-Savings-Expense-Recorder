import React from "react";
import '../../src/styles.css';

function About() {
    return (
        <div className="about-container">
        <h2 className="heading1">About Monthly Savings and Expense Tracking System</h2>
        <p className="content1">
            Welcome to our Monthly Savings and Expense Recorder! We understand the importance of managing your finances efficiently and saving for the future. You always need to keep track of how you are spending money and on what. But it is difficult to do it manually. But don't worry, we help you out. Our system provides you with a simple and intuitive way to track your monthly savings and expenses, helping you stay on top of your financial goals.
        </p>
        <p className="content1">
            With our system, you can easily monitor budgets, savings targets, and graphically visualise your fluctiations in expenses and savings in real-time. We offer detailed insights and visualizations, so you can analyze your spending patterns and make informed decisions about your finances. Our user-friendly interface and powerful features make it easy for anyone to take control of their money.
        </p>
        <br />
        <br />
        <p className="content1 content-heading">
            Key Features:
        </p>
        <ul className="listt1">
            <li className="lis1">Track your monthly income and expenses</li>
            <li className="lis1">Create budgets and savings goals</li>
            <li className="lis1">Track your savings</li>
            <li className="lis1">Analyze spending patterns with charts and graphs</li>
            <li className="lis1">Helps you to keep your savings graph always increasing</li>
        </ul>
        <p className="content1" style={{paddingBottom:"35px", paddingTop:"35px"}}>
            We are committed to helping you achieve financial success. Start using our Monthly Savings and Expense Recorder today and take control of your finances!
        </p>
    </div>
    )
}

export default About;
