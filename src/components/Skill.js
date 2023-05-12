import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './Skill.css'

export const Skill = ({skillName}) => {
  return (
    <Badge bg='secondary'>{skillName}</Badge>
  )
}