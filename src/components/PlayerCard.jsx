import { FaHeart, FaEllipsisH } from 'react-icons/fa';

export default function PlayerCard() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 rounded-xl text-white flex items-center gap-6">
      <img src="https://www.whosampled.com/static/images/media/track_images_100/mr338438_2022512_3457341228.jpg" alt="cover" className="w-32 h-32 rounded-lg" />
      <div>
        <h2 className="text-2xl font-bold">Bad Bunny, Tití Me Preguntó </h2>
        <p className="text-sm">50.7 M monthly listeners</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold">Play</button>
          <FaHeart className="text-xl" />
          <FaEllipsisH className="text-xl" />
        </div>
      </div>
    </div>
  );
}