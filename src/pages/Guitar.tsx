import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Guitar: React.FC = () => {
  const [guitar, setGuitar] = useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchGuitar() {
      try {
        const { data } = await axios.get(
          "https://641d9857945125fff3d1165b.mockapi.io/items" + id
        );
        setGuitar(data);
      } catch (error) {
        alert("Error while fetching...");
        navigate('/');
      }
    }
    fetchGuitar();
  }, []);
  if (!guitar) return <>Loading...</>;

  return (
    <div className="container">
      <img src={guitar.imageUrl} />
      <h2>{guitar.title}</h2>
      <h4>{guitar.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>back</span>
        </button>
      </Link>
    </div>
  );
};

export default Guitar;
