package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.pojo.OpenAccount;

@Repository
public class OpenAccountRepoImpl implements OpenAccountRepo {
	
	@PersistenceContext
	EntityManager entityManager;

	@Override
	@Transactional
	public void save(OpenAccount account) {
		entityManager.persist(account);
	}

	@Override
	public OpenAccount getAccountByAccNumber(int accountNumber) {
		return entityManager.find(OpenAccount.class, accountNumber);
	}
	
	@Override
	public boolean isAccountPresent(String aadharCard) {
		return (Long) entityManager.createQuery("select count(t.aadharCard) from OpenAccount t where t.aadharCard = :aadharNumber")
				.setParameter("aadharNumber", aadharCard).getSingleResult()==1 ? true : false;
	}

	@Override
	public Long numberOfAccountPresent() {
		return (Long) entityManager.createQuery("select count(*) from OpenAccount t")
				.getSingleResult();
	}
	
	@Override
	public Long maxAccountNumber() {
		return (Long) entityManager.createQuery("select max(t.accountNumber) from OpenAccount t")
				.getSingleResult();
	}

	@Override
	public Long maxRefId() {
		return (Long) entityManager.createQuery("select max(t.refernceId) from OpenAccount t")
				.getSingleResult();
	}
	

}
