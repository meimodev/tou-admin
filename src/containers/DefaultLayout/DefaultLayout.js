import React, {Component, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";

import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";
import RequestHandlerFunctions from "../../views/TOUviews/RequestHandler";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
    loading = () => (
        <div className="container animated fadeIn text-center pt-3">
            <div className="spinner-border text-warning" role="status"/>
        </div>
    );

    signOut = e => {
        e.preventDefault();
        RequestHandlerFunctions.signOut()
        this.props.history.push("/login");
    };

    handleRedirectTo = (e, to) => {
        e.preventDefault();
        this.props.history.push(to);
    };
    // handleRedirectLogin(e) {
    //   e.preventDefault();
    //   this.props.history.push("/login");
    //   console.log("redirect to another page");
    // }

    render() {

        let isSignedIn = RequestHandlerFunctions.isSignedIn()

        return (
            <div className="app">
                <AppHeader fixed>
                    <Suspense>
                        <DefaultHeader
                            onLogout={this.signOut}
                            onRedirectTo={this.handleRedirectTo}
                        />
                    </Suspense>
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader/>
                        <AppSidebarForm/>
                        <Suspense>
                            <AppSidebarNav navConfig={navigation} {...this.props} />
                        </Suspense>
                        <AppSidebarFooter/>
                        <AppSidebarMinimizer/>
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={routes}/>
                        <Container fluid>
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => isSignedIn?  <route.component {...props} /> : <Redirect to='login'/>
                                                }
                                            />
                                        ) : null;
                                    })}

                                    {isSignedIn ? <Redirect from="/" to="/dashboard"/> :
                                        <Redirect from="/" to="/login"/>}

                                </Switch>
                            </Suspense>
                        </Container>
                    </main>
                    <AppAside fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultAside/>
                        </Suspense>
                    </AppAside>
                </div>
                {/* <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter> */}
            </div>
        );
    }
}

export default DefaultLayout;
