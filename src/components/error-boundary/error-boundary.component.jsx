import React, {Component} from 'react';

import NotFound from '../../pages/notfound/notfound.component';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorData: null
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        this.setState({error, info});
    }

    render() {
        if(this.state.hasError) {
            return <NotFound />
        }

        return this.props.children
    }
};

export default ErrorBoundary;