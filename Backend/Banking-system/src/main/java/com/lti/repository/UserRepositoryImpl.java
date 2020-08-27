
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
	public OpenAccount findbyId(String accNumber) {
		return em.find(OpenAccount.class,accNumber);
	}
	
	@Override
	@Transactional
	public boolean isAccountRegistered(String accNumber) {
		return (Long)em.createNamedQuery("getAcc").setParameter("accNumber", accNumber)
				.getSingleResult()==1 ? true : false;
	}
	
	@Override
	@Transactional
	public boolean validUserIdPassword(String userId, String password) {
		// TODO Auto-generated method stub
		return (Long) em.createNamedQuery("loginCheck").setParameter("id", userId).setParameter("password", password)
				.getSingleResult()==1?true:false;
	}

	@Override
	@Transactional
	public User findUserById(String userId) {	
		return em.find(User.class,userId);
	}

	@Override
	@Transactional
	public boolean isUserValid(String userId) {
		return (Long) em.createNamedQuery("userIdCheck").setParameter("id",userId)
				.getSingleResult()==1?true:false;
	}

	@Override
	@Transactional
	public int getNoOfInvalidAttempts(String userId) {
		// TODO Auto-generated method stub
		return (Integer)em.createNamedQuery("getInvalidAttempts").setParameter("id", userId)
				.getSingleResult();
	}

	@Override
	@Transactional
	public void setNoOfInvalidAttempts(String userId, int attempts) {
		// TODO Auto-generated method stub
		em.createNamedQuery("updateInvalidAttempts")
		.setParameter("attempts",attempts)
		.setParameter("id", userId)
		.executeUpdate();
	}
	
	@Override
	@Transactional
	public void resetPassword(String userId, String updatedPassword) {
		em.createNamedQuery("changePassword")
		.setParameter("id",userId)
		.setParameter("password",updatedPassword)
		.executeUpdate();
	}
	@Override
	public String getUserByAccNumber(String accNumber) {
		// TODO Auto-generated method stub
		return (String)em.createNamedQuery("getIdByAccNumber")
				.setParameter("accNumber",accNumber).getSingleResult();
	}
	@Override
	public String getTransactionPassword(String fromAccNumber) {
		// TODO Auto-generated method stub
		return (String)em.createNamedQuery("getTnPassword")
				.setParameter("accNumber",fromAccNumber).getSingleResult();
	}
	@Override
	public void savelastLogin(String userId,String date) {
		// TODO Auto-generated method stub
		em.createNamedQuery("setLastLoginDate")
		.setParameter("id",userId)
		.setParameter("dateTime",date)
		.executeUpdate();
	}
}
	
