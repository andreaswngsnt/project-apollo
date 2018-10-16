import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import DokYayFooter		from '../components/DokYay/DokYayFooter'
import DokYayHeader		from '../components/DokYay/DokYayHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem      from '../components/Grid/GridItem'
import Parallax      from '../components/Parallax/Parallax'

import blogPostsPageStyle from '../assets/jss/material-kit-pro-react/views/blogPostsPageStyle'

import ArticleCategoriesNavbar from '../sections/ArticleCategoriesNavbar'
import TopArticles from '../sections/TopArticles'
import ArticleList from '../sections/ArticleList'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class ArticleHomePage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes, ...rest } = this.props

		return (
			<div>
				<DokYayHeader />
				<Parallax image={parallaxBg} filter='dark' small>
					<div className={classes.container}>
						<GridContainer justify='center'>
							<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
								<h2 className={classes.title}>
									Beranda Artikel-artikel Kesehatan
								</h2>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classes.main}>
					<div className={classes.container}>
						<ArticleCategoriesNavbar />
						<TopArticles />
						<ArticleList />
					</div>
				</div>
				<DokYayFooter />
			</div>
		)
	}
}

export default withStyles(blogPostsPageStyle)(ArticleHomePage)