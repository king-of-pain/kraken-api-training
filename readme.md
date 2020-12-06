# Exploring kraken nodejs api

## Trades Endpoint : 
### from Kraken Api documentation
Input:
- pair = asset pair to get trade data for
- since = return trade data since given id (optional.  exclusive)

Result: array of pair name and recent trade data
- <pair_name> = pair name
- array of array entries[<price>, <volume>, <time>, <buy/sell>, <market/limit>, <miscellaneous>]
- last = id to be used as since when polling for new trade data


*OPEN : first price 
*CLOSED  : final price 







