import { FaHeart, FaEllipsisH } from 'react-icons/fa';

export default function SongItem({ title, artist, image }) {
  return (
    <div className="flex items-center justify-between py-2 hover:bg-gray-100 px-2 rounded">
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="w-10 h-10 rounded" />
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{artist}</p>
        </div>
      </div>
      <div className="flex gap-3 text-gray-600">
        <FaHeart />
        <FaEllipsisH />
      </div>
    </div>
  );
}