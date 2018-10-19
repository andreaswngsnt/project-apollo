import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Card from '../components/Card/Card'
import CardHeader from '../components/Card/CardHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import articleListStyle from '../assets/jss/dokYayStyles/sections/articleListStyle'

import blogImg1 from '../assets/img/blogs/img1.jpg'
import blogImg2 from '../assets/img/blogs/img2.jpg'

class ArticleList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			articles: [
				{
					title: 'Autodesk looks to future of 3D printing with Project Escher',
					description: 'Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model.',
					category: 'ENTERPRISE',
					image: blogImg1,
					author: 'Rizieq Shihab'
				},
				{
					title: '6 insights into the French Fashion landscape',
					description: 'Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model.',
					category: 'TRENDING',
					image: blogImg2,
					author: 'Najwa Shihab'
				}
			]
		}

		this.renderList = this.renderList.bind(this)
	}

	renderList() {
		const { classes } = this.props

		return this.state.articles.map((article) => {
			return (
				<Card plain blog className={classes.card} key={article.title}>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<CardHeader image plain>
								<a href="#pablito" onClick={e => e.preventDefault()}>
									<img src={article.image} alt="..." />
								</a>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${article.image})`,
										opacity: "1"
									}} />
							</CardHeader>
						</GridItem>
						<GridItem xs={12} sm={8} md={8}>
							<h6 className={classes.cardCategory}>{article.category}</h6>
							<h3 className={classes.cardTitle}>
								<a href="#pablo" onClick={e => e.preventDefault()}>
									{article.title}
								</a>
							</h3>
							<p className={classes.description}>
								{article.description}
							</p>
							<p>
								<a href="#pablo" onClick={e => e.preventDefault()}>
									Baca lebih...
								</a>
							</p>
							<p className={classes.author}>
								oleh: <a href="#pablo" onClick={e => e.preventDefault()}>{article.author}</a>, 3 hari lalu
							</p>
						</GridItem>
					</GridContainer>
				</Card>
			)
		})
	}

	render() {
		const { classes, ...rest } = this.props

		return (
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={12} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
							<h2 className={classes.title}>Artikel Kesehatan Terbaru</h2>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							{this.renderList()}
						</GridItem>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(articleListStyle)(ArticleList)