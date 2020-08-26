package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.pojo.Transaction;

@Repository
public class TransactionRepositoryImpl implements TransactionRepository {

	@PersistenceContext
	private EntityManager em;
	@Override
	public boolean isTransactionPresent() {
		// TODO Auto-generated method stub
	return (Long)em.createNamedQuery("isTableEmpty")
				.getSingleResult()==0 ? true:false;
	}
	@Override
	@Transactional
	public void save(Transaction transaction) {
		// TODO Auto-generated method stub
		em.persist(transaction);
	}
	@Override
	public int getTransactionId() {
		// TODO Auto-generated method stub
		return (Integer)em.createNamedQuery("getTransactionId")
				.getSingleResult();
	}
	@Override
	public List<Transaction> getAllRecords(String accNumber) {
		// TODO Auto-generated method stub
		return em.createNamedQuery("getMiniStatement").setParameter("accNumber",accNumber).getResultList();
	}

}
