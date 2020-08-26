package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.pojo.Beneficiary;

@Repository
public class BeneficiaryRepoImpl implements BeneficiaryRepo {
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public Beneficiary getBeneficiaryById(int bId) {
		return entityManager.find(Beneficiary.class, bId);
	}

	@Override
	public int getIdByAccNumber(String fromAcc, String toAcc) {
		return (int) entityManager.createNamedQuery("gettingBenefIdFromAccounts").setParameter("from", fromAcc).setParameter("to", toAcc).getSingleResult();
	}

	@Override
	@Transactional
	public void save(Beneficiary benf) {
		entityManager.persist(benf);
	}
	
	public boolean isAccountPresent(String fromAcc, String toAcc) {
		return (long) entityManager.createNamedQuery("beneficiaryExistance")
		.setParameter("from", fromAcc).setParameter("to", toAcc).getSingleResult()>0?true:false;
	}
}
