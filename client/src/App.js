import React, { useEffect } from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import memories from "./images/memories.png";

import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import useStyles from './styles';


const App = () => {

    //define
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        // Container to make things center
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* Typography stands for any textual elements */}
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                        <Form />
                </Grid>
                </Grid>
            </Grow>

        </Container>
    );
}

export default App;