import React, {useState} from "react";

import {TrainingApp} from "./components/TrainingApp";

import {ICONS} from "../../static/icons";
import {ROUTES_NAMES} from "../../routes/routesNames";

import {StateType} from "./types";

import "../../static/styles/main-container.scss";
import "./styles.scss";

export const PetProjects = () => {
    const [state, setState] = useState<StateType>({
        apps: [
            {
                title: "Page of posts",
                description: "Here you can create posts",
                id: "posts",
                link: ROUTES_NAMES.POST,
                linkApp: "",
                IconFC: ICONS.listPost,
            },
        ],
        gitHubApps: [
            {
                title: "Project NextJS",
                description: "",
                id: "project-nextJS",
                link: "https://next-js-9320et4b0-ignatyaskevich.vercel.app/",
                linkApp: "",
                IconFC: ICONS.nextJS,
            },
            {
                title: "Pokemon Shop",
                description: "",
                id: "pokemon-shop",
                link: "https://github.com/IgnatYaskevich98/PokeShop",
                linkApp: "",
                IconFC: ICONS.onlineShopping,
            },
            {
                title: "Search GitHub Users",
                description: "",
                id: "search-gitHub-users",
                link: "https://github.com/IgnatYaskevich98/SSamerTask",
                linkApp: "",
                IconFC: ICONS.githubCircle,
            },
            {
                title: "Internship Project",
                description: "",
                id: "internship-project",
                link: "https://github.com/IgnatYaskevich98/labJS",
                linkApp: "",
                IconFC: ICONS.moreRepo,
            },
        ],
    });

    return (
        <div className={"main-wrapper"}>
            <div className={"main-wrapper--container"}>
                <div className={"training-apps"} id={"projects-container"}>
                    <h2 className={"training-apps--title"}>Training Apps</h2>

                    <div className={"training-apps--projects"}>
                        {state.apps.map((app) => {
                            const {title, id, link, description, IconFC} = app;

                            return (
                                <TrainingApp
                                    title={title}
                                    description={description}
                                    link={link}
                                    IconFC={IconFC}
                                    key={id}
                                />
                            );
                        })}
                    </div>
                    <h2 className={"training-apps--title"}>Links to Apps in GitHub</h2>
                    <div className={"training-apps--projects"}>
                        {state.gitHubApps.map((app) => {
                            const {title, id, link, IconFC} = app;

                            return (
                                <div className={"gitHub-app"} key={id} id={id}>
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <div className={"gitHub-app--link"}>
                                            <IconFC/>
                                        </div>
                                    </a>
                                    <div className={"gitHub-app--title"}>
                                        <strong>{title}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
