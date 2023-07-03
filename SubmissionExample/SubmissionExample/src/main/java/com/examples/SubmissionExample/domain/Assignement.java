package com.examples.SubmissionExample.domain;

//Imports
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;
import javax.persistence.Id;

/**
 * Assignement Class
 * @author Andrés Missiego
 */
@Entity
public class Assignement {
	//Class Arguments
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String status;
	private String githubUrl;
	private String branch;
	private String codeReviewVideoUrl;
	@ManyToOne(optional = false)
	private User user;
	//TODO: private User assignedTo;
	
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	
	/**
	 * @return the githubUrl
	 */
	public String getGithubUrl() {
		return githubUrl;
	}
	
	/**
	 * @param githubUrl the githubUrl to set
	 */
	public void setGithubUrl(String githubUrl) {
		this.githubUrl = githubUrl;
	}
	
	/**
	 * @return the branch
	 */
	public String getBranch() {
		return branch;
	}
	
	/**
	 * @param branch the branch to set
	 */
	public void setBranch(String branch) {
		this.branch = branch;
	}
	
	/**
	 * @return the codeReviewVideoUrl
	 */
	public String getCodeReviewVideoUrl() {
		return codeReviewVideoUrl;
	}
	
	/**
	 * @param codeReviewVideoUrl the codeReviewVideoUrl to set
	 */
	public void setCodeReviewVideoUrl(String codeReviewVideoUrl) {
		this.codeReviewVideoUrl = codeReviewVideoUrl;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
