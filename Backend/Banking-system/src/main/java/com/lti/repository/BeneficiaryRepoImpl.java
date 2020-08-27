package com.lti.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.dto.viewBeneficiary;
import com.lti.pojo.Beneficiary;

@Repository
public class BeneficiaryRepoImpl implements BeneficiaryRepo {
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public List<viewBeneficiary> getBeneficiary(String accNo){
		
		List<viewBeneficiary> beneficiaryList = entityManager.createNamedQuery("getNameAndAccountNumber")
				.setParameter("acno", accNo).getResultList();
		return beneficiaryList;
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
