export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-32 mx-6">
      <div className="h-auto bg-white">
        {/* Decorative Gradient */}
        <div className="rounded-[50px] bg-gradient-to-r from-[#a77fbd] to-[#6c3c8a] h-50 mb-4"></div>

        {/* Separator */}
        <div className="border-t border-[#afafaf] mb-4" />

        {/* Rights Reserved Section */}
        <div className="pb-6 text-center text-xs text-[#898989] space-y-1">
          <p>
            &copy; {year} Dr. Martin Luther King Primary School.All rights reserved.
          </p>
          <p>All rights reserved.</p>
          <p>Division Public Education | Ministry ECYS - Sint Maarten</p>
        </div>
      </div>
    </footer>
  );
}


