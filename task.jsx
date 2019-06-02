import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const MARGIN_PADDING = 10;
const BORDER = 1;
const RADIUS = 2;

const Container = styled.div`
  margin-bottom: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  border-radius: ${RADIUS}px;
  padding: ${MARGIN_PADDING}px;
  background-color: green;
`;

export default class Task extends React.Component {
  render(){
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            aria-roledescription="Press space bar to lift the task"
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}