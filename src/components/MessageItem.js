import React from 'react';

import { 
  Avatar, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyle = makeStyles({
  inline: {
    display: 'inline',
  },
});

const MessageItem = ({name, text}) => {
  const classes = useStyle();
  const avatarPath = gravatarPath(name);
  return(
    <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {text}
              </Typography>
          }
        />
      </ListItem>
  );
}

export default MessageItem;