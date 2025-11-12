import yfinance as yf

stocks = [
    "POONAWALLA.NS", "RELIANCE.NS", "TCS.NS", "INFY.NS", "HDFCBANK.NS", "SBIN.NS",
    "ICICIBANK.NS", "BHARTIARTL.NS", "ADANIENT.NS", "WIPRO.NS", "LT.NS",
    "HINDUNILVR.NS", "KOTAKBANK.NS", "TITAN.NS", "MARUTI.NS", "ASIANPAINT.NS",
    "ITC.NS", "M&M.NS", "BAJAJ-AUTO.NS", "ULTRACEMCO.NS", "NESTLEIND.NS",
    "POWERGRID.NS", "ONGC.NS", "NTPC.NS", "JSWSTEEL.NS", "HEROMOTOCO.NS",
    "TATAMOTORS.NS", "APOLLOHOSP.NS", "DRREDDY.NS", "CIPLA.NS", "DIVISLAB.NS",
    "COALINDIA.NS", "BRITANNIA.NS", "HCLTECH.NS", "TATAPOWER.NS",
    "ADANIPORTS.NS", "HINDALCO.NS", "BPCL.NS", "IOC.NS", "UPL.NS",
    "EICHERMOT.NS", "TATASTEEL.NS", "BAJAJFINSV.NS", "BAJFINANCE.NS", "SUNPHARMA.NS",
    "TECHM.NS", "SHREECEM.NS", "SBILIFE.NS", "HDFCLIFE.NS", "RECLTD.NS"
]

for ticker in stocks:
    data = yf.download(ticker, period="1y", interval="1d")
    data.to_csv(f"{ticker}.csv")
    print(f"✅ Saved {ticker}.csv")
