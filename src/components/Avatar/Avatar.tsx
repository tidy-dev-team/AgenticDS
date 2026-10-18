import './Avatar.css'

export type AvatarSize = '24' | '32' | '40' | '52' | '64'
export type AvatarShape = 'circle' | 'rounded' | 'square'
export type AvatarType = 'picture' | 'initials'

export type AvatarProps = {
  type?: AvatarType
  shape?: AvatarShape
  size?: AvatarSize
  outline?: boolean
  initials?: string
  imageUrl?: string
  alt?: string
  className?: string
}

const SIZE_PX: Record<AvatarSize, number> = {
  '24': 24,
  '32': 32,
  '40': 40,
  '52': 52,
  '64': 64,
}

const FONT_SIZE: Record<AvatarSize, number> = {
  '24': 9,
  '32': 11,
  '40': 14,
  '52': 17,
  '64': 22,
}

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

export function Avatar({
  type = 'picture',
  shape = 'circle',
  size = '40',
  outline = false,
  initials = 'AA',
  imageUrl,
  alt = '',
  className = '',
}: AvatarProps) {
  const px = SIZE_PX[size]
  const fontSize = FONT_SIZE[size]

  const borderRadius =
    shape === 'circle' ? '50%' : shape === 'rounded' ? '30%' : '4px'

  const classes = [
    'avatar',
    `avatar--${type}`,
    outline ? 'avatar--outline' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={{ width: px, height: px, borderRadius, fontSize }}
      role="img"
      aria-label={type === 'initials' ? initials : alt}
    >
      {type === 'picture' ? (
        imageUrl ? (
          <img src={imageUrl} alt={alt} className="avatar__img" />
        ) : (
          <span className="avatar__placeholder">
            <PlaceholderIcon />
          </span>
        )
      ) : (
        <span className="avatar__initials">{initials}</span>
      )}
    </div>
  )
}
