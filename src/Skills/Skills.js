import React from 'react'
import './Skills.css'
import htmlImage from'../Images/html.png'
import cssImage from '../Images/css.png'
import BootStrapImage from '../Images/bootstrap.png'
import JavaScriptImage from '../Images/javascript.png'
import ReactImage from '../Images/react.png'
import ReduxImage from '../Images/redux.png'
import MySQLImage from '../Images/mysql.png'
import MongoImage from '../Images/mongoDB.png'
import NodeImage from '../Images/node.png'
import GitHubIMage from '../Images/github.png'
import AwsImage from '../Images/AWS.png'


function Skills() {
    return (
        <div className='skills_container'>
            <div className="skills-page">
                <div className="skills-left-side">
                    <h1 className="animate__animated  animate__bounce  home-content skills-heading">
                        Teach Stacks
                    </h1><br/><br/>
                    <div className="tech-stack">
                        <img src={htmlImage} alt="htmlImage" />
                        <img src={cssImage} alt="cssImage" />
                        <img src={BootStrapImage} alt="BootStrapImage" />
                        <img src={JavaScriptImage} alt="JavaScriptImage" />
                        <img src={ReactImage} alt="ReactImage" />
                        <img src={ReduxImage} alt="ReduxImage" />
                        <img src={NodeImage} alt="NodeImage" />
                        <img src={MySQLImage} alt="MysqlImage"/>
                        <img src={MongoImage} alt="MongoImage" />
                        <img src={GitHubIMage} alt="GitHubIMage" />
                        <img src={AwsImage} alt="AwsImage" />
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default Skills