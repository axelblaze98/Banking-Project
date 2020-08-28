package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="Admin_Table")
@NamedQuery(name = "logincheck", query = "select admin.adminUserID from Admin admin where admin.adminUserID=:user and admin.adminPassword=:pass\r\n")
public class Admin {
	@Id
	@Column(name="adminUserID", length = 6)
	private String adminUserID;
	
	@Column(name="adminPassword", length = 15)
	private String adminPassword;
	
	@Column(name="adminName", length=15)
	private String adminName;

	public String getAdminUserID() {
		return adminUserID;
	}

	public void setAdminUserID(String adminUserID) {
		this.adminUserID = adminUserID;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	@Override
	public String toString() {
		return "Admin [adminUserID=" + adminUserID + ", adminPassword=" + adminPassword + "]";
	}
	
}
