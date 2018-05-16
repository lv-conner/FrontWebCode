select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1850 a where a.APPLE_PO_NUMBER='8888170416'
union 
select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1855 a where a.APPLE_PO_NUMBER='8888170416'
union 																						    
select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1860 a where a.APPLE_PO_NUMBER='8888170416'
union 																						    
select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1856 a where a.APPLE_PO_NUM='8888170416'
union 																						    
select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1846 a where a.PO_NUMBER='8888170416'
union 																						    
select a.EDIState,a.AddDate,a.ModifyDate,a.ModifyUser,a.PutAcknowledgeDate,a.GetAcknowledgeDate from dbo.EDI1810 a where a.PO_NUMBER='8888170416'