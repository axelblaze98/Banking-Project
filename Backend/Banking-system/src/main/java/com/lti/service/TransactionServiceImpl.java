package com.lti.service;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;   

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dto.TransactionDetailsDto;
import com.lti.exception.ServiceException;
import com.lti.repository.BeneficiaryRepo;
import com.lti.repository.OpenAccountRepo;
import com.lti.repository.TransactionRepository;
import com.lti.repository.UserRepository;
import com.lti.pojo.*;

@Service
public class TransactionServiceImpl implements TransactionService {
	
	@Autowired
	OpenAccountRepo balancerepo;
	@Autowired
	TransactionRepository repo;
	@Autowired
	BeneficiaryRepo benrepo;
	@Autowired
	UserRepository userrepo;
	
	@Override
	public void transaction(TransactionDetailsDto transactionDetails) {
		// TODO Auto-generated method stub
		int tsId=13691;
		Transaction transaction = new Transaction();
		
		String actualTnPassword = userrepo.getTransactionPassword(transactionDetails.getFromAccount());
		System.out.println(transactionDetails.getTnPassword());
		
		if(!actualTnPassword.equals(transactionDetails.getTnPassword())) {
			throw new ServiceException("Invalid Transaction Password");
		}
		if(!benrepo.isAccountPresent(transactionDetails.getFromAccount(),transactionDetails.getToAccount())) {
			throw new ServiceException("Benificiary not Found");
		}
		if(transactionDetails.getTransactionBalance()<=0) {
			throw new ServiceException("Enter Valid Transaction Ammount");
		}
		WithdrawBalance(transactionDetails.getFromAccount(),transactionDetails.getTransactionBalance());
		DepositBalance(transactionDetails.getToAccount(),transactionDetails.getTransactionBalance());
		
		transaction.setFromAccountNumber(transactionDetails.getFromAccount());
		transaction.setToAccountNumber(transactionDetails.getToAccount());
		transaction.setTransactionMode(transactionDetails.getTransactionMode());
		transaction.setTransactionAmount(transactionDetails.getTransactionBalance());
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");  
		LocalDateTime now = LocalDateTime.now();
		
		transaction.setTransactionDate(dtf.format(now));
		
		System.out.println(transaction);
		if(repo.isTransactionPresent()) {
			transaction.setTransactionId(tsId);
		}
		else {
			transaction.setTransactionId(repo.getTransactionId()+1);
		}
		
		repo.save(transaction);
		
	}

	private void DepositBalance(String toAccount, int transactionBalance) {
		// TODO Auto-generated method stub
		int curBalance=balancerepo.getBalance(toAccount);
		curBalance+=transactionBalance;
		balancerepo.updateBalance(toAccount, curBalance);
		
	}

	public void WithdrawBalance(String fromAccount, int transactionBalance) {
		// TODO Auto-generated method stub
		int curBalance=balancerepo.getBalance(fromAccount);
		if(curBalance<transactionBalance) {
			throw new ServiceException("Insufficient Funds");
		}
		curBalance-=transactionBalance;
		balancerepo.updateBalance(fromAccount, curBalance);
	}

	@Override
	public List<Transaction> getMiniStatement(String accNumber) {
		// TODO Auto-generated method stub
		List<Transaction> transactions=repo.getAllRecords(accNumber);
		int size = transactions.size();
		if(size<=5) {
			return transactions;
		}
		else {
		List<Transaction> last5Transactions = new ArrayList<Transaction>();
		
		for(int i=size-1;i>=(size-5);i--) {
			last5Transactions.add(transactions.get(i));
		}
		return  last5Transactions;
		}
	}

	@Override
	public List<Transaction> getTransactionHistory(String fromDate, String toDate, String accountNumber) {
		return repo.getTransactionBetweenDates(fromDate, toDate, accountNumber);
	}

//	@Override
//	public String changeDateFormat(String date) {
//		// TODO Auto-generated method stub
//		String splitDate[];
//        splitDate=date.split("-");
//        String finalDate="";
//        for(int i=2;i>=0;i--){
//            finalDate=finalDate+splitDate[i]+"-";
//        }
//        return finalDate.substring(0,10);
//	}
	
	
}
