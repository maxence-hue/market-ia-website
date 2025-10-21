interface TeamMemberProps {
  name: string
  role: string
  description: string
  photo: string
}

export default function TeamMember({ name, role, description, photo }: TeamMemberProps) {
  return (
    <div className="card-glass p-6 text-center hover:shadow-glow transition-all duration-300">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-dark-lighter">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <h3 className="text-xl font-display font-bold text-light mb-1">{name}</h3>
      <p className="text-primary text-sm mb-3">{role}</p>
      <p className="text-light/70 text-sm">{description}</p>
    </div>
  )
}
