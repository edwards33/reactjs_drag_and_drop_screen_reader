import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import InnerList from './innerlist'

const MARGIN_PADDING = 10;
const BORDER = 1;
const RADIUS = 2;
const COLUMN_WIDTH = 235;
const MIN_HEIGHT = 100;

const Container = styled.div`
  margin: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  background-color: white;
  border-radius: ${RADIUS}px;
  width: ${COLUMN_WIDTH}px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: ${MARGIN_PADDING}px;
`;
const TaskList = styled.div`
  padding: ${MARGIN_PADDING}px;
  flex-grow: 1;
  min-height: ${MIN_HEIGHT}px;
`;

export default class Column extends React.Component {
  render(){
    return(
      <Draggable
        draggableId={this.props.column.id}
        index={this.props.index}
      >
        {(provided) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title
              {...provided.dragHandleProps}
            >{this.props.column.title}</Title>
            <Droppable 
              droppableId={this.props.column.id}
              type="task"
            >
              {provided =>(
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    ); 
  }
}