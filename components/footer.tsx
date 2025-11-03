export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-muted-foreground">contact@anthonypelaz.fr</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Localisation</h3>
            <p className="text-muted-foreground">Cornier, Auvergne-Rhône-Alpes, France</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

