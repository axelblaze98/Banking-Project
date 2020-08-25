
package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.pojo.OpenAccount;
import com.lti.pojo.User;

@Repository
public class UserRepositoryImpl implements UserRepository {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public void save(User user) {
		// TODO Auto-generated method stub
		em.persist(user);
	}
	@Override
	@Transactional
	public boolean isUserPresent() {
		// TODO Auto-generated method stub
		return (Long)em.createNamedQuery("tableEmpty")
				.getSingleResult()==0 ? true:false;
	}
	@Override
	@Transactional
	public String getUserId() {
		// TODO Auto-generated method stub
		return (String)em.createNamedQuery("getID")
				.getSingleResult();
	}
	@Override
	@Transactional
	public OpenAccount findbyId(long accNumber) {
		return em.find(OpenAccount.class,accNumber);
	}
}
	
