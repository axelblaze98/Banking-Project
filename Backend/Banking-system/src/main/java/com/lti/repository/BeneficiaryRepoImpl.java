package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
		return (int) entityManager.createNamedQuery("gettingBIdFromAccounts").setParameter("from", fromAcc).setParameter("to", toAcc).getSingleResult();
	}

}
