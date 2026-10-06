from sqlalchemy import Column, Integer, String, Float
from .database import Base

class CryptoAsset(Base):
    __tablename__ = "crypto_assets"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    symbol = Column(String, index=True)
    price = Column(Float)
    volatility = Column(Float)