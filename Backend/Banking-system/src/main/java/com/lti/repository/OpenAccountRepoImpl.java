package com.lti.repository;

import java.util.List;

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
	public OpenAccount getAccountByAccNumber(String accountNumber) {
		return entityManager.find(OpenAccount.class, accountNumber);
	}
	
	@Override
	public boolean isAccountPresent(String aadharCard) {
		return (Long) entityManager.createNamedQuery("checkIfAccountPresent")
				.setParameter("aadharNumber", aadharCard).getSingleResult()==1 ? true : false;
	}

	@Override
	public Long numberOfAccountPresent() {
		return (Long) entityManager.createNamedQuery("countTotalAccounts")
				.getSingleResult();
	}

	@Override
	public String maxAccountNumber() {
		return (String) entityManager.createNamedQuery("checkMaxAccountNumber")
				.getSingleResult();
	}

	@Override
	public String maxRefId() {
		return (String) entityManager.createNamedQuery("checkMaxRefernceIdNumber")
				.getSingleResult();
	}
	
	@Override
	public List<OpenAccount> viewAllRecords() {
		// TODO Auto-generated method stub
		List<OpenAccount> allAccounts = entityManager.createNamedQuery("getAllAccounts").getResultList();
		return allAccounts;
	}

	@Override
	public String findAccountNumberByRefId(String refId) {
		return (String) entityManager.createNamedQuery("getAccountNumberByRefId").setParameter("refId", refId)
				.getSingleResult();
	}

	@Override
	@Transactional
	public void updateAccountStatus(String adminApproval, String adminRemark, String accNo) {
		// TODO Auto-generated method stub
		System.out.println(adminApproval+" "+adminRemark+" "+accNo);
		entityManager.createNamedQuery("updateAccountStatusByAdmin")
		.setParameter("status", adminApproval)
		.setParameter("remark", adminRemark)
		.setParameter("acc", accNo)
		.executeUpdate();
	}
	
	@Override
	public boolean isAccountActive(String acNo) {
		return (Long) entityManager.createNamedQuery("checkIfAccountActive")
				.setParameter("accNo", acNo).getSingleResult()>0 ? true : false;
	}



}
