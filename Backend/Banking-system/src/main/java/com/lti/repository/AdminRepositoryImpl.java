package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.pojo.Admin;

@Repository
public class AdminRepositoryImpl implements AdminRepository {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public void save(Admin admin) {
		// TODO Auto-generated method stub
		entityManager.persist(admin);
	}
	
	
	@Override
	public String getAdminByIdAndPassword(String userId, String password) {
		
		return (String) entityManager.createNamedQuery("logincheck").setParameter("user", userId)
				.setParameter("pass", password).getSingleResult();
	}

	@Override
	public Admin getAdminById(String userId) {
		
		return entityManager.find(Admin.class, userId);
	}

	@Override
	public boolean isAdminAvailable(String userId) {
		System.out.println("userId is "+userId);
		Long res  = (Long) entityManager.createQuery("select count(a.adminUserID) from Admin a where a.adminUserID = :id")
				.setParameter("id", userId).getSingleResult();
		System.out.println("count is "+res);
		return (Long) entityManager.createQuery("select count(a.adminUserID) from Admin a where a.adminUserID = :user")
				.setParameter("user", userId).getSingleResult() == 1 ? true : false;
	}
}	
