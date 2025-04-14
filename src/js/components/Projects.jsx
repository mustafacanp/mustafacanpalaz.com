import * as React from "react";
import {
	Window,
	WindowContent,
	WindowHeader,
	Tab,
	Tabs,
	TabBody,
	GroupBox,
	Button,
	Separator,
	MenuList,
	StyledMenuListItem,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollTo from "../utils/scrollTo";

import water from "react95/dist/themes/water";

import projects from "../../data/projects.json";
import styles from "../../css/Window.css";

class Project extends React.Component {
	state = {
		activeTab: 1,
	};
	handleChange = (value) => {
		this.setState({ activeTab: value });
	};

	render() {
		const { activeTab } = this.state;
		return (
			<div>
				<ThemeProvider theme={water}>
					<Window className={styles.windowSpacing}>
						<WindowHeader className={styles.windowHeader}>
							<span style={{ fontWeight: 400 }}>🤩 Projects.exe</span>
						</WindowHeader>
						<WindowContent>
							<Tabs value={activeTab} onChange={this.handleChange}>
								{projects.map((project, i) => (
									<Tab key={`tab-${project.name}`} value={i + 1}>
										{project.name}
									</Tab>
								))}
							</Tabs>
							<div>
								{projects.map((project) => {
									if (activeTab === project.id)
										return (
											<TabBody key={project.name}>
												<GroupBox>
													<ul className={styles.listText}>
														{project.items.map((item) => (
															<li
																key={`section-${item}`}
																className={styles.itemText}
															>
																{item}
															</li>
														))}
													</ul>
													{(project.demoLink || project.githubLink) && (
														<MenuList open={true} className={styles.links}>
															{project.demoLink && (
																<StyledMenuListItem
																	as="a"
																	href={project.demoLink}
																	target="_blank"
																	className={styles.linkItem}
																>
																	💻 Check it out!
																</StyledMenuListItem>
															)}
															{project.demoLink && project.githubLink && (
																<Separator orientation="vertical" size="2px" />
															)}
															{project.githubLink && (
																<StyledMenuListItem
																	as="a"
																	href={project.githubLink}
																	target="_blank"
																	className={styles.linkItem}
																>
																	📁 Github!
																</StyledMenuListItem>
															)}
														</MenuList>
													)}
												</GroupBox>
											</TabBody>
										);
								})}
							</div>
						</WindowContent>
						<div className={styles.buttonGroup}>
							<Button onClick={() => scrollTo("experience", 150)}>
								<span>Back ⇑</span>
							</Button>
							<Button onClick={() => scrollTo("projectUrls")}>
								<span>Next ⇓</span>
							</Button>
						</div>
					</Window>
				</ThemeProvider>
			</div>
		);
	}
}

export default Project;
